#!/bin/bash

# ==============================
# CONFIG
# ==============================
GITLAB_GROUP="ubg76"

# ==============================
# STEP 1 — Fetch group ID
# ==============================
echo "🔍 Fetching GitLab group ID for '$GITLAB_GROUP'..."
GROUP_INFO=$(curl -s "https://gitlab.com/api/v4/groups/$GITLAB_GROUP")
GROUP_ID=$(echo "$GROUP_INFO" | grep -o '"id":[0-9]*' | head -n1 | cut -d: -f2)

if [ -z "$GROUP_ID" ]; then
  echo "❌ Could not find group '$GITLAB_GROUP' on GitLab."
  exit 1
fi
echo "✅ Found GitLab group ID: $GROUP_ID"
echo

# ==============================
# STEP 2 — Clone all repos directly into current folder
# ==============================
PAGE=1
TOTAL=0

while true; do
  PROJECTS=$(curl -s "https://gitlab.com/api/v4/groups/$GROUP_ID/projects?per_page=100&page=$PAGE")
  COUNT=$(echo "$PROJECTS" | grep -o '"http_url_to_repo"' | wc -l)
  if [ "$COUNT" -eq 0 ]; then
    break
  fi

  echo "📦 Found $COUNT repositories on page $PAGE..."
  echo

  echo "$PROJECTS" | grep -o '"http_url_to_repo":"[^"]*"' | sed 's/"http_url_to_repo":"//;s/"//' | while read -r REPO_URL; do
    REPO_NAME=$(basename "$REPO_URL" .git)

    # Skip if folder already exists
    if [ -d "$REPO_NAME" ]; then
      echo "⏭️  Skipping $REPO_NAME (already exists)"
      continue
    fi

    echo "⬇️  Cloning $REPO_NAME ..."
    git clone --depth=1 "$REPO_URL" "$REPO_NAME"
    ((TOTAL++))
  done

  ((PAGE++))
done

echo
echo "✅ Finished! Cloned $TOTAL repositories from GitLab group '$GITLAB_GROUP'."
echo "📁 All repos are now in: $(pwd)"

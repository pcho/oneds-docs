#!/bin/bash

# Function to convert filename to title (kebab-case to Title Case)
to_title() {
  echo "$1" | sed 's/-/ /g' | awk '{for(i=1;i<=NF;i++) $i=toupper(substr($i,1,1)) tolower(substr($i,2))}1'
}

# Function to extract first paragraph as description
get_description() {
  # Get content after ## Description, take first non-empty paragraph
  sed -n '/^## Description/,/^##/{/^## Description/d;/^##/d;p}' "$1" | \
    grep -v '^$' | head -1 | \
    sed 's/"/\\"/g' | \
    cut -c1-200
}

# Process all .md files in content directory
find /Users/pcho/Work/docs/content -name "*.md" | while read -r file; do
  # Skip if already has frontmatter
  if head -1 "$file" | grep -q "^---$"; then
    echo "Skipping (already has frontmatter): $file"
    continue
  fi

  # Get filename without extension
  filename=$(basename "$file" .md)
  
  # Convert to title
  title=$(to_title "$filename")
  
  # Get description from file content
  description=$(get_description "$file")
  
  # If no description found, use a default
  if [ -z "$description" ]; then
    description="Documentation for $title component"
  fi
  
  # Create temp file with frontmatter
  {
    echo "---"
    echo "title: $title"
    echo "description: \"$description\""
    echo "---"
    echo ""
    cat "$file"
  } > "${file}.tmp"
  
  mv "${file}.tmp" "$file"
  echo "Added frontmatter to: $file"
done

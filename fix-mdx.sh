#!/bin/bash

find /Users/pcho/Work/docs/content -name "*.mdx" | while read -r file; do
  # Replace standalone < that's not in code blocks with &lt;
  # Match <followed by space, comma, letter, or number (not already &lt;)
  sed -i '' 's/<\([^!a-zA-Z\/&]\)/\&lt;\1/g' "$file"
  
  # Replace standalone > with &gt;
  sed -i '' 's/>\([^a-zA-Z]\)/\&gt;\1/g' "$file"
  
  # Fix double escaped
  sed -i '' 's/\&amp;lt;/\&lt;/g' "$file"
  sed -i '' 's/\&amp;gt;/\&gt;/g' "$file"
done

echo "Fixed MDX escaping"

# PurgeCSS issue with Tailwind CSS

This repository demonstrates a rare issue where PurgeCSS, used with Tailwind CSS, fails to remove unused styles even when the `content` array is correctly configured.

## Problem

Despite following Tailwind CSS's documentation,  unused styles are still present in the production build. The `content` array in `tailwind.config.js` correctly points to the necessary files.

## Reproduction

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run build`.
4. Inspect the generated CSS file; you will find unused classes.

## Expected Behavior

PurgeCSS should remove all unused Tailwind CSS classes. The production CSS file should only contain the styles used in the application.

## Possible Causes

* **Complex class names or dynamic class generation:** It is possible that a non-standard pattern in generating class names or the usage of dynamic classes prevents PurgeCSS from effectively identifying unused styles.
* **Conflicting plugins or configurations:** There could be conflicts between other plugins or configurations that interfere with PurgeCSS's functionality.
* **Issue with PurgeCSS's handling of specific directives:** PurgeCSS might have difficulty parsing certain Tailwind directives, leading to incorrect purging.

## Troubleshooting Steps

* Carefully review the `tailwind.config.js` file, paying attention to the `content` array and ensuring that all necessary files are included.
* Temporarily disable other plugins or configurations to see if any of them are causing the conflict.
* Check for any custom CSS rules that might be conflicting with PurgeCSS.
* Look into the PurgeCSS logs for any warnings or errors that could provide insights into the problem.
* Try using a different purge strategy (e.g., `@fullhuman/postcss-purgecss`) to see if it resolves the issue.

## Solution

The solution, if any, will be provided in this repository's `bugSolution.js` file, alongside a comprehensive explanation.

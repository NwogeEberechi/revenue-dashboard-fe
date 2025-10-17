# Commit Message Convention

## Required Format

```
<type>(<scope>): <subject>

<optional body>

closes ticket#<number>
```

## Rules

1. **Type** (required) - Must be lowercase
2. **Scope** (required) - Must be lowercase, in parentheses
3. **Subject** (required) - Must be lowercase, no period at the end
4. **Body** (optional) - Detailed description
5. **Footer** (required) - Must reference ticket number

## Valid Examples

### ✅ Simple commit
```bash
git commit -m "feat(transactions): add transactions filtering

closes ticket#123"
```

### ✅ With detailed body
```bash
git commit -m "feat(wallet): add withdrawal functionality

Implement withdraw button and modal dialog.
Add validation for minimum withdrawal amount.
Integrate with backend API.

closes ticket#45"
```

### ✅ Bug fix
```bash
git commit -m "fix(transactions): resolve date formatting issue

closes ticket#78"
```

### ✅ More examples
```bash
feat(user): add user profile dropdown
closes ticket#12

fix(wallet): correct balance calculation
closes ticket#34

docs(readme): update installation instructions
closes ticket#56

test(transactions): add unit tests for filter component
closes ticket#67

refactor(api): improve error handling
closes ticket#89

perf(transactions): optimize list rendering
closes ticket#90
```

## Using Git Commit in Terminal

For multi-line commits, use the terminal editor:

```bash
git commit
```

This opens your editor where you can write:

```
feat(transactions): add transactions filtering

Added date range filter, status filter, and type filter.
Filters persist in localStorage for better UX.

closes ticket#123
```

## Valid Types

- `feat` - New feature
- `fix` - Bug fix
- `docs` - Documentation changes
- `style` - Code style changes (formatting)
- `refactor` - Code refactoring
- `perf` - Performance improvements
- `test` - Adding or updating tests
- `chore` - Maintenance tasks
- `ci` - CI/CD changes
- `build` - Build system changes
- `revert` - Revert a previous commit

## Common Scopes

- `transactions` - Transaction-related changes
- `wallet` - Wallet-related changes
- `user` - User-related changes
- `ui` - UI component changes
- `api` - API integration changes
- `config` - Configuration changes
- `deps` - Dependency updates

## ❌ Invalid Examples

```bash
# Missing scope
"feat: add feature"

# Missing ticket reference
"feat(transactions): add filtering"

# Uppercase type
"Feat(transactions): add feature"

# Uppercase subject
"feat(transactions): Add feature"

# Period at the end
"feat(transactions): add feature."

# Uppercase scope
"feat(Transactions): add feature"
```

## Breaking Changes

For breaking changes, add `!` after the type/scope:

```bash
git commit -m "feat(api)!: migrate to new API endpoints

BREAKING CHANGE: API endpoints have changed from /api/v1 to /api/v2.
Update all API calls to use new endpoints.

closes ticket#100"
```

## Tips

1. Keep the subject line under 72 characters
2. Use imperative mood: "add" not "added" or "adds"
3. Don't capitalize the subject line
4. Don't end the subject line with a period
5. Separate subject from body with a blank line
6. Use the body to explain what and why, not how

## Quick Reference

```bash
# Feature
git commit -m "feat(scope): description

closes ticket#123"

# Bug fix
git commit -m "fix(scope): description

closes ticket#123"

# Documentation
git commit -m "docs(scope): description

closes ticket#123"

# Test
git commit -m "test(scope): description

closes ticket#123"
```

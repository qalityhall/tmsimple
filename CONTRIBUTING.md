# <a name="commit"></a> Commit Message Guidelines

We have very precise rules over how our git commit messages can be formatted. This leads to **more
readable messages** that are easy to follow when looking through the **project history**.

## Branch Naming Convention

### Category

A git branch should start with a category. Pick one of these: feat, bugfix, hotfix, or test.

feat is for adding, refactoring or removing a feature
bugfix is for fixing a bug
hotfix is for changing code with a temporary solution and/or without following the usual process (usually because of an emergency)
test is for experimenting outside of an issue/ticket

### Reference

After the category, there should be a "/" followed by the reference of the issue/ticket you are working on. If there's no reference, just add no-ref.

### Description

After the reference, there should be another "/" followed by a description which sums up the purpose of this specific branch. This description should be short and "kebab-cased".

Samples:

```
feat/login-page
```

To sum up, follow this pattern when branching:

```
git branch <category/reference/description-in-kebab-case>
```

## Commit Message Format

Each commit message consists of a **header**, and **body**. The header has a special
format that includes a **type**, a **scope** and a **subject**:

```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
```

The **header** is mandatory and the **scope** of the header is optional.

Any line of the commit message cannot be longer 100 characters! This allows the message to be easier
to read on GitHub as well as in various git tools.

Samples:

```
feat(authentication): add user/login endpoint

This commit adds a new API endpoint for user authentication and login. The login endpoint accepts a user's credentials (username and password) and returns an access token upon successful authentication.
```

### Type

Must be one of the following:

-   **build**: Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)
-   **ci**: Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs)
-   **docs**: Documentation only changes
-   **feat**: A new feature
-   **fix**: A bug fix
-   **perf**: A code change that improves performance
-   **refactor**: A code change that neither fixes a bug nor adds a feature
-   **style**: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
-   **test**: Adding missing tests or correcting existing tests

### Scope

The scope should be the name of the npm package affected (as perceived by the person reading the changelog generated from commit messages.

The following is the list of supported scopes:

-   **authentication**
-   **test-case**
-   **test-suite**
-   **project**
-   **test-run**
-   **test-execution**
-   **issue**
-   **test-environment**
-   **test-data**
-   **test-plan**
-   **user-roles**

### Subject

The subject contains a succinct description of the change:

-   use the imperative, present tense: "change" not "changed" nor "changes"
-   don't capitalize the first letter
-   no dot (.) at the end

### Body

Just as in the **subject**, use the imperative, present tense: "change" not "changed" nor "changes".
The body should include the motivation for the change and contrast this with previous behavior.

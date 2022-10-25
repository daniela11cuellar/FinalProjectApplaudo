# Table of Contents
1. [Automation Practice Testing](#automation-practice-testing)
2. [Technologies used](#technologies-used)
3. [How to install and run the project](#how-to-install-and-run-the-project)
4. [Contributor Guidelines](#contributor-guidelines)
   1. [Code review process](#code-review-process)
   2. [Branches](#branches)
   3. [Commit message convention](#commit-message-convention)
   4. [Pull Requests](#pull-requests)

## Automation Practice Testing
This application is aimed to run automated test cases on the
[My Store](https://automationpractice.com/) website. This project is useful
because it offers quicker feedback about the main functionality and workflows
of the online store.

## Technologies used:

* [cypress](https://www.cypress.io/)

## How to install and run the project
1. Install [cypress](https://docs.cypress.io/guides/getting-started/installing-cypress).
2. Download the project:

        git clone https://github.com/daniela11cuellar/FinalProjectApplaudo.git
3. [Run cypress](https://docs.cypress.io/guides/getting-started/opening-the-app#cypress-open)
on the project root.

## Contributor Guidelines

### Code review process

The core team looks at Pull Requests on a regular basis.After feedback has
been given, we expect responses within two weeks. The pull request must be
reviewed by at least 2 owners. After two weeks, we may close the pull request
if it isn't showing any activity.

Your code must take into account [Cypress Best Practices](https://docs.cypress.io/guides/references/best-practices).

### Branches

One of these branches is usually worked:

* The `dev` branch is where all work on future releases is done. All new features are contributed to this branch.

* The `main` branch is where the released stable version is done. These features come from the `dev` branch

### Commit message convention

Commit messages must be in English.

Commit message structure is the following:

        type: Subject

        Body

        Footer


   **The type**

The type is contained within the title and can be one of these types:

* **feat**: Adding tests from the documentation of test cases.
* **fix**: A bug fix
* **docs**: Changes to documentation
* **style**: Formatting, missing semicolons, etc.; no code change
* **refactor**: Refactoring code
* **chore**: Updating build tasks, package manager configs, etc.; no production code change


   **The subject**
   
   Use an imperative tone to describe what a commit from a does,
   rather than what it did. Start subject with a capital letter.
   Do not end the subject with a period.
   
   **Body**

   Not all commits are complex enough to warrant a body, therefore it is
   optional and only used when a commit requires a bit of explanation and
   context. Use the body to explain the what and why of a commit, not the how.

   When writing a body, the blank line between the title and the body is
   required, and you should limit the length of each line to no more than 72
   characters.
   
   **Footer**
   
   The footer is optional and is used to reference issue tracker IDs.

**Examples of good commit subject**

|                          BAD                           |                            GOOD                             |
|:------------------------------------------------------:|:-----------------------------------------------------------:|
|           added test cases for SignIn module           |           feat: Add tests cases for SignIn module           |
| verify that the user can add products to the wish list | feat: Verify that the user can add products to the wishlist |

### Pull Requests
When you're finished with the changes, create a pull request, also known as a PR.
* Don't forget to [link PR to issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/linking-a-pull-request-to-an-issue)
if you are solving one.
* Enable the checkbox to allow maintainer edits so the branch can be updated for 
a merge. Once you submit your PR, a team member will review your proposal.
We may ask questions or request additional information.
* We may ask for changes to be made before a PR can be merged, either using
suggested changes or pull request comments.
* As you update your PR and apply changes, mark each conversation as [resolved](https://docs.github.com/en/github/collaborating-with-issues-and-pull-requests/commenting-on-a-pull-request#resolving-conversations).

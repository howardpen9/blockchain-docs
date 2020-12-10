# Empty Set Documentation

This repo contains the documentation for the Empty Set Dollar (ESD) project.

The live URL of the site is https://docs.emptyset.finance

## Summary

The repo uses the Nextra generator to create a documentation website from a series of markdown files. These files follow a file tree structure to segment sections and keep the repo maintainable.

### File Structure

The following tree structure is applied: 

```
├── home.md                 // Top level content
├── meta.json               // Top level menu info
├── protocol                // Section folder
     ├── meta.json          // Section menu info
     └── overview.md        // Section content
```

The repo should follow this structure, so keep this in mind when making contributions to the project.

## How to run the site

In order to preview the site locally you need to do the following things:

```
git clone https://github.com/emptysetsquad/dollar-docs

cd dollar-docs

yarn

yarn dev
```

## How to Contribute

This repo is open for public contributions so if you see an area in the documentation that is missing, incomplete, or incorrect follow the below steps have your contributions added. 

> Note: your contribution should have exactly one concern (for example one article or one section). If a PR address more than one area, it should be split into two or more PRs.

The following is a typical workflow for submitting new content is as follows:

1. Fork this repository
2. Create a new branch based on your fork
3. Commit changes and push them to your fork
4. Create a pull request against the `staging` branch

If all [status checks](https://help.github.com/articles/about-status-checks/) pass, and the maintainer approves the PR, it will be merged. Somethimes reviewers may ask you to complete additional fixes or other changes before your pull request can be approved and merged.

A pull request should have exactly one concern (for example one feature or one bug). If a PR address more than one concern, it should be split into two or more PRs.

## Questions 

If you have any questions please raise and issue or visit us in the [Discord](https://discord.gg/vPws9Vp)


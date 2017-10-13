# iplayer-web-a11y-tests

Uses [bbc-a11y](https://github.com/bbc/bbc-a11y) to run a suite of automated tests to test accessibility across the iPlayer website.

## Installation

```
npm install
```

## Usages

### Run against live

```
npm start
```

This will generate the commands for bbc-a11y and then run the tests against the pages listed in paths.txt against http://www.bbc.co.uk.

### Sign in to BBC ID before running the tests

If you want the tests to be run against the pages for a signed in user, you can set the `A11Y_USERNAME` and `A11Y_PASSWORD` environment variables to a valid BBC ID username and password, e.g:

```
A11Y_USERNAME=joe.bloggs@gmail.com A11Y_PASSWORD=myiplayerpassword npm run start
```

### Run against a different environment

If you want to run against a different environment, you can set the environment variable `A11Y_BASE_URL`, e.g.:

```
A11Y_BASE_URL=http://www.test.bbc.co.uk npm start
```

### Run against a different set of pages

If you want to run against a set of pages other than the hard-coded default, you can set the environment variable `A11Y_PATHS` to a comma delimited list of paths, e.g.:

```
A11Y_PATHS="/bbcone,/bbctwo,/tv/bbcthree" npm start
```

### Run in interactive mode

To explore the test errors, you can run bbc-a11y in interactive mode:

```
npm run start:interactive
```

### Generate a JUnit report

To generate a JUnit report, you can tell bbc-a11y to use the JUnit reporter:

```
npm run start:junit
```

### Generate a JUnit report using Docker

If you don't have all the necessary libraries on your system required to run Electron, for example if you want to run this on a CI server, you can run the bbc-a11y tests inside a Docker container (thanks to Joseph Wynn for [the container](https://hub.docker.com/r/wildlyinaccurate/bbc-a11y-docker/)):

```
npm run start:ci
```

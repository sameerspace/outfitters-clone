# Outfitters

Welcome to Outfitters, a full-stack web application built with Next.js and Nest.js. Outfitters is designed to help users explore and discover the latest trends in fashion, providing a seamless and enjoyable shopping experience.

This project is only meant to showcase our development skills and not meant to copy the original work.

### Prerequisites

\_Required Node.js version: >18.16.0

-   lerna

    ```sh
      npm install --global lerna
    ```

    Here is the link of <a href="https://lerna.js.org/docs/getting-started">lerna.js.org</a> documentation.

-   pnpm
    ```sh
      npm install -g pnpm
    ```

### Installation

1. Clone the repo
    ```sh
    git clone https://github.com/crushlovely/aha-rewards-redemption.git
    ```
2. Go to directory

    ```sh
    cd outfitters-clone
    ```

3. Install NPM packages
    ```sh
    pnpm install
    ```

### Lerna commands

-   run parallel
    ```sh
      lerna run start --parallel
    ```
-   run specific workspace
    ```sh
      lerna run --scope=<workspace-name> start
    ```
-   add new dependency to root
    ```sh
      pnpm install <package-name> -w
    ```
-   add new dependency in a specific workspace
    ```sh
      cd applications/workspace-name
      pnpm install <package-name>
    ```

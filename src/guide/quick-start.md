# Quick Start

In this section, we will guide you through the simplest steps to get a Parsek application up and running, providing a
quick and easy introduction to building with the Parsek platform.

## Creating a Parsek Application

### Prerequisites

- JVM 8+ (Ensure you have Java 8 or later installed on your local machine)

### Manual (Step-by-Step)

1. Create a folder named `parsek-backend`.
2. Download the latest stable Parsek release from [Parsek Releases](https://github.com/StatuParsek/parsek/releases).
3. Open a terminal in the `parsek-backend` folder.
4. Run Parsek using the following command:

    ```bash
    java -jar <downloaded-parsek-file>.jar
    ```

5. Visit [http://localhost:8088/api/health](http://localhost:8088/api/health) in your browser to verify the application
   is running.

[//]: # (### Installation using Parsek CLI &#40;Setup Wizard&#41; // TODO)

## Directory Structure

```
parsek-backend/
├── plugins/
│   └── (plugin1.jar)
│   └── (plugin2.jar)
│   └── (plugin3.jar)
├── Parsek.jar
└── config.conf
```

Description:

- **`plugins/`**: This folder contains JAR files for various plugins. To install a plugin, simply place its JAR file in
  this directory.
- **`Parsek.jar`**: This is the core JAR file where the Parsek application starts.
- **`config.conf`**: This configuration file is auto-created and used to set up and customize the Parsek application.

## Key Concepts / What’s Happening?

In a Parsek application, the system begins by loading all available plugins, setting up a configuration file, and
preparing for dependency injection. This process establishes a robust plugin system, allowing for seamless integration
and functionality within the application.

## What's Next?

Great job! The Parsek is up & running! How to proceed further your Parsek journey:-
- Check out [Parsek core configuration](./configuration)
- Play with official Parsek plugins!
Check out [Official Plugins](./plugins) page. Download the latest release file, put it in the plugins/ folder and re-run the Parsek. **And Voila!**
- Try community-maintained plugins!
Search for a public community-driven Parsek plugin in GitHub:
https://github.com/search?q=parsek-plugin-&type=repositories

  > **These plugins are third-party and not affiliated with Parsek. Please bear in mind to use them at your own risk!**
- Create & Develop a plugin!
Go to [Plugin Development](../plugin-development) page to create a plugin for your own needs.

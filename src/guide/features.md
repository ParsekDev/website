# Features

As a core platform, Parsek provides essential features such as routing, plugin support, and a built-in health check
system. Additional functionality for a Parsek application is delivered through plugins, allowing flexible and modular
feature expansion.

## Routing

Parsek features a dynamic routing mechanism, enabling easy addition, modification, or removal of routes. Powered by
Vert.X Web's router, it enhances Parsek with automatic cookie and parameter management, adding even more flexibility.
For more details, refer to the Plugin Development section.

## Plugins

Plugins are the cornerstone of any Parsek back-end application, offering extensive flexibility and extendability to
empower developers with limitless possibilities.

If a desired feature is missing or required, you are always welcome to file an
issue [here](https://github.com/StatuParsek/parsek/issues).

- **Events**

  Events offer a powerful way to extend the functionality of the Parsek or other plugins based on your needs. You can
  also create custom events to provide additional API support for other plugins, enhancing integration and flexibility.

- **Life Cycles**

  Plugin life cycles in Parsek offer dynamic capabilities such as enabling and disabling plugins, loading and unloading
  data, and handling heavy data processing during startup or in the background, providing flexibility and control over
  plugin management.

- **Built-in Configuration System**

  Parsek’s built-in configuration system simplifies configuration management for plugins, including seamless migrations.
  Currently, all plugin configurations are stored in a single file, but this approach is expected to evolve in version
  3.

- **Annotations**

  Parsek provides annotations for simplifying the creation of HTTP routes and managing dependency injection, offering a
  faster and safer approach to streamline development.

- **Dependency Injection**

  Parsek utilizes Spring's context for seamless dependency injection between the core platform and plugins, ensuring
  efficient management of dependencies throughout the application.

## Health Check System

Parsek includes a built-in health check mechanism that monitors its status. If the system is healthy and running, it
returns an **HTTP 200** response with the following JSON payload:

**`GET /api/health`** (with default API prefix)

```json
HTTP/1.1 200 OK
Content-Type: application/json

{
  "result": "ok"
}
```

> **If not healthy, it may not return anything at all or may return an error in the future.**

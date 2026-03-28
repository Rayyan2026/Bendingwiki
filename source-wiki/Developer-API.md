## Adding Bending to your project

The API artifact is published to the Maven Central repository:


[![Maven Central](https://img.shields.io/maven-central/v/me.moros/bending-api?label=bending-api&style=flat-square)](https://search.maven.org/artifact/me.moros/bending-api)
#### Maven
```xml
  <repositories>
    <repository>
        <id>central-portal-snapshots</id>
        <url>https://central.sonatype.com/repository/maven-snapshots/</url>
    </repository>
  </repositories>

 <dependency>
    <groupId>me.moros</groupId>
    <artifactId>bending-api</artifactId>
    <version>3.12.0</version>
    <scope>provided</scope>
</dependency>
 ```

#### Gradle (Kotlin)
```kotlin
repositories {
    mavenCentral()
    maven("https://central.sonatype.com/repository/maven-snapshots/") // For snapshots
}

dependencies {
    compileOnly("me.moros:bending-api:3.12.0")
}
```

## Obtaining an instance of the API

[![Javadocs](https://img.shields.io/badge/docs-javadocs-informational?style=flat-square)](https://javadoc.io/doc/me.moros/bending-api)

The root API interface is Game.

### Bukkit
You can obtain it using the Bukkit ServicesManager
```java
RegisteredServiceProvider<Game> provider = Bukkit.getServicesManager().getRegistration(Game.class);
if (provider != null) {
  Game game = provider.getProvider();
  // Do stuff with it
}
```

### Sponge
```java
ServiceRegistration<Game> provider = Sponge.game().serviceProvider().registration(Game.class).orElse(null);
if (provider != null) {
  Game game = provider.service();
  // Do stuff with it
}
```

### All platforms

An instance of Game can also be obtained from the GameProvider class.
```java
Game game = GameProvider.get(); // Throws IllegalStateException if Game isn't loaded
```

You can also check the [addon system](Addons).

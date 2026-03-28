### Storage support
| Remote         | Local    |
|:---------------|----------|
| PostgreSQL*    | H2*      |
| MariaDB        | HyperSQL |
| MySQL          | Json     |

*preferred

### Exporting
`/bending export [file]` - asynchronously gather all stored data and export them to a compressed json file

### Importing
`/bending import <file>` - asynchronously import the specified file and merge all data to the currently used storage engine

Any online users will have their profiles (bound slots, board, elements and presets) automatically refreshed from the newly imported data

### Migrating from different engines
1. Create an export using `/bending export [file]` and wait for it to complete
1. Stop the server completely
1. Edit bending.conf and change to a different storage engine
1. Start the server again
1. Import the data you previously exported using `/bending import <file>`

### Network

If you are running multiple server instances with Bending under a network/proxy sharing data between them is easy.

Choose a remote database type and fill in your connection info in the `storage` section of `bending.conf`.

You should also consider enabling `lazy-load` in the `properties` section of `bending.conf` to ensure data integrity.
import Dexie from "dexie";

const db = new Dexie("Conversations");
db.version(4).stores({
	files: "++id, [channelCid+fileName], file",
	logos: "++id, [companyId+fileName], file",
});

db.open();

export default db;

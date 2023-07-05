----Traductions:

DROP TABLE IF EXISTS "traduction";

CREATE TABLE IF NOT EXISTS "traduction" (
    "id" SERIAL PRIMARY KEY,
    "content" TEXT NOT NULL
    
);

INSERT INTO "traduction" ("id","content") VALUES 
-- TRADUC EN ANGLAIS
(1,'The Gundam Barbatos is a mobile suit appearing in the series Mobile Suit Gundam:
Iron-Blooded Orphans. It is piloted by Mikazuki Augus.'),

-- TRADUC EN JAPONAIS
(2,'ガンダム・バルバトスは、シリーズ「機動戦士ガンダム」に登場するモビルスーツです。
「鉄血のオルフェンズ」というシリーズで登場するモビルスーツで、パイロットはミカヅキ・オーガスです。');
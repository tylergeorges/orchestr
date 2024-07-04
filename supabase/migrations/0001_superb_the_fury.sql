ALTER TABLE "posts" ALTER COLUMN "id" SET DATA TYPE uuid;--> statement-breakpoint
ALTER TABLE "posts" ALTER COLUMN "id" SET DEFAULT gen_random_uuid();--> statement-breakpoint
ALTER TABLE "profiles" ADD COLUMN "avatar" text;--> statement-breakpoint
ALTER TABLE "profiles" DROP COLUMN IF EXISTS "avatar_url";
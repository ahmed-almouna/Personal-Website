import Link from "next/link";

export default function Footer() {
  return (
    <div className="flex justify-center py-6">
      <Link
        href="https://github.com/syaamkhandaker"
        className="text-xs"
      >
        Credit to Syaam Khandaker
      </Link>
    </div>
  );
}

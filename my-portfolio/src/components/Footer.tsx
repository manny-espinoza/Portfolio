import React from "react";
import Link from "next/link";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div>
      <Link href="#welcome">
        <footer>
          <p className="underline">Back to Top | © 2023 Manuel Espinoza. All rights reserved</p>
        </footer>
      </Link>
    </div>
  );
}

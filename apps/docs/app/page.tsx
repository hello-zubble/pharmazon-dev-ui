"use client"
import Button from "@repo/ui/Button";
import { MyButton } from "@repo/ui/Button2";
import { Card } from "@repo/ui/card";
import '@repo/ui/styles.css';

export default function Home(): JSX.Element {
  const handleClick = () => {
    alert('Hello');
  }
  return (
    <div>
      <h1 className="text-3xl text-_primary">Pharazon Clinic</h1>
      <h1 className="text-3xl text-_secondary">Pharazon Clinic</h1>
      <h1 className="text-3xl text-_accent-primary">Pharazon Clinic</h1>
      <h1 className="text-3xl text-_accent-secondary">Pharazon Clinic</h1>
      <Button onClick={handleClick}>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="primary_outline">Outline</Button>
      <Button variant="secondary_outline">Outline</Button>

      <div className="p-10">
        <MyButton />
      </div>
    </div>
  );
}

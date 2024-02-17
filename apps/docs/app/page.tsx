import Button from "@repo/ui/Button";
import { Card } from "@repo/ui/card";
import '@repo/ui/styles.css';

export default function Home(): JSX.Element {
  const handleClick = () => {
    alert('Hello');
  }
  return (
    <div>
      <h1 className="text-3xl text-primary">Pharazon Clinic</h1>
      <h1 className="text-3xl text-secondary">Pharazon Clinic</h1>
      <h1 className="text-3xl text-accent-primary">Pharazon Clinic</h1>
      <h1 className="text-3xl text-accent-secondary">Pharazon Clinic</h1>
      <Button onClick={handleClick}>Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
    </div>
  );
}

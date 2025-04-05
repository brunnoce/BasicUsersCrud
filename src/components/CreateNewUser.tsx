import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { useUserActions } from "@/hooks/useUserActions";
import { useState } from "react";

export function CreateNewUser() {
  const {addUser} = useUserActions();
  const [result, setResult] = useState<'ok' | 'ko' | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); 
    setResult(null)

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form)

    const name = formData.get('name') as string
    const email = formData.get('email') as string
    const github = formData.get('github') as string

    if (!name || !email || !github){
      return setResult('ko')
    }

    addUser({name, email, github})
    
    form.reset();
    return setResult('ok')
  }

  return (
    <Card className="max-w-md mx-auto mt-4">
      <h3>Crear nuevo usuario</h3>

      <form onSubmit={handleSubmit}>
        <Input placeholder="Name" name="name"></Input>
        <Input placeholder="Email" name="email"></Input>
        <Input placeholder="Github" name="github"></Input>

        <div>
          <Button
            type='submit'
            style={{marginTop: '16px'}}
          > 
          Crear User
          </Button>
          <span>
            {result === 'ok' && <Badge color="green" variant={"secondary"}>Usuario creado</Badge>}
            {result === 'ko' && <Badge color="red" variant={"destructive"}>Error en los campos</Badge>}
          </span>
        </div>
      </form>
    </Card>
  )
}
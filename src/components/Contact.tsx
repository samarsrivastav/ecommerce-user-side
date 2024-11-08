import { Button, Card, Label, TextInput } from "flowbite-react";
import { useState } from "react";
import { postContact } from "../data/contactApi";
import { useNavigate } from "react-router-dom";

export function Contact() {
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [problem,setProblem]=useState("")
    const navigate=useNavigate()
  return (
    <div className="h-full my-[7.5rem]">
        <Card className="max-w-sm mx-auto my-[2rem]">
        <form className="flex flex-col gap-4">
            <div>
            <div className="mb-2 block">
                <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput id="email1" type="email" placeholder="name@email.com" required  onChange={e=>{
                setEmail(e.target.value)
            }}/>
            </div>
            <div>
            <div className="mb-2 block">
                <Label htmlFor="name" value="Your Name" />
            </div>
            <TextInput id="name" type="text" required onChange={e=>{
                setName(e.target.value)
            }}/>
            </div>
            <div>
            <div className="mb-2 block">
                <Label htmlFor="query" value="Your Query" />
            </div>
            <TextInput id="query" type="text" required  onChange={e=>{
                setProblem(e.target.value)
            }}/>
            </div>
            <Button type="button" onClick={async()=>{
                const response=await postContact(email,problem,name)
                if(response.status==200){
                    alert("query posted succesfully")
                    navigate('/')
                }else{
                    alert("error while posting")
                }
            }}>Submit</Button>
        </form>
        </Card>
    </div>
  );
}

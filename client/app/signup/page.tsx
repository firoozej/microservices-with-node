"use client"
import { SyntheticEvent, useRef } from "react"
import { useRouter } from "next/navigation"
import { request } from "@/app/utilities"

export default function SignUp() {
    const router = useRouter()
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const handleSubmit = async (e: SyntheticEvent) => {
        e.preventDefault()
        const { isError } = await request("api/users/signup", {
            method: "post",
            body: {
                email: email.current?.value,
                password: password.current?.value,
            },
        })
        console.log(isError)
        if (!isError) {
            console.log('no error')
            router.push("/")
        }
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                email
                <input ref={email} />
            </div>
            <div>
                password
                <input ref={password} />
            </div>
            <div>
                <button>Submit</button>
            </div>
        </form>
    )
}

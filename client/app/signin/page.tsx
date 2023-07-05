"use client"
import { useRef } from "react"
import { useRouter } from "next/navigation"
import { request } from "@/app/utilities"

export default function SignIn() {
    const router = useRouter()
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const handleSubmit = async () => {
        const { isError } = await request("api/users/signin", {
            method: "post",
            body: JSON.stringify({
                email: email.current,
                password: password.current,
            }),
        })
        if (!isError) {
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
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

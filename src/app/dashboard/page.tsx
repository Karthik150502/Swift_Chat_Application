import React from 'react'
import Button from '@/components/app/Button'
export default function page() {
    return (
        <div className='m-20 min-h-screen overflow-hidden relative bg-white flex items-center justify-center'>

            <Button size={"default"} variant="warning" >Hello</Button>
            <Button size={"default"} variant="info" >Hello</Button>
            <Button size={"default"} variant="success" >Hello</Button>
            <Button size={"default"} variant="error" >Hello</Button>
            <Button size={"default"} >Hello</Button>
            <Button size={"default"} variant="ghost" >Hello</Button>
        </div>
    )
}

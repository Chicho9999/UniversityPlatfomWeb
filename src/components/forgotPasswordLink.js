import React from 'react'
import { Link } from 'wouter'

export function ForgotPassword(props) {

    const {forgotPasswordUrl} = props
    return (
            <Link href={forgotPasswordUrl} className={forgotPasswordUrl}> Forgot password?</Link>
        )
    

}
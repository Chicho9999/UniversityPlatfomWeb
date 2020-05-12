import React from 'react'
import { Link } from 'wouter'

export function CreateAccountBtn(props) {

    const {crateAccountUrl} = props
    return (
        <div className="sign-up">
            Don't have an account? <Link href={crateAccountUrl}>Create One</Link>
        </div>
    )
    
}
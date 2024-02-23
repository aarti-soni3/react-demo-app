import React from 'react'

export default function Alert(props) {

    const capitalized = (word) => {
        const text = word.toLowerCase();
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    return (
        <div style={{ height: '50px' }}>
            {props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalized(props.alert.type)} : {props.alert.message}</strong>
                {/* <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
            </div>}
        </div>
    )
}

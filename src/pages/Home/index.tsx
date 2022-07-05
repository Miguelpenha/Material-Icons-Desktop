import React, { useState } from 'react'
import { Container, Author, Title, Form, Input, Button } from './style'

function Home() {
    const [message, setMessage] = useState('')

    function sendMessage(ev: React.FormEvent<HTMLFormElement>) {
        ev.preventDefault()
        setMessage('')

        window.Main.sendMessage(message)

        console.log('Mensagem enviada para o terminal!')
    }

    return (
        <Container>
            <Author title="Abrir portfólio" onClick={() => window.Main.openUrl('https://portfolio-miguelpenha.vercel.app/')}>
                <span>Miguel da Penha</span>
                <span> (miguel.penha1@gmail.com)</span>
            </Author>
            <Title>Digite uma mensagem</Title>
            <Form onSubmit={sendMessage}>
                <Input
                    type="text"
                    id="message"
                    name="message"
                    value={message}
                    placeholder="Mensagem..."
                    onChange={ev => setMessage(ev.target.value)}
                />
                <Button
                    type="submit"
                    disabled={message.length == 0}
                    title={message.length == 0 ? 'Você precisa fornecer uma mensagem' : 'Mostrar mensagem no terminal'}
                >
                    Mostrar mensagem no terminal
                </Button>
            </Form>
        </Container>
    )
}

export default Home
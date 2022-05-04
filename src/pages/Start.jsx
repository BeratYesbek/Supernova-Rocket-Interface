import React from 'react'
import { Container } from 'react-bootstrap'
import AnimatedText from 'react-animated-text-content';
import { Button } from 'antd';
import { Routes, Route, Link } from "react-router-dom";

export default function Start() {
    return (
        <div className='fill-window'>
            <Container>
                <AnimatedText
                    type="words"
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                    }}
                    animationType="float"
                    interval={0.06}
                    duration={0.8}
                    tag="p"
                    className="animated-paragraph"
                    includeWhiteSpaces
                    threshold={0.1}
                    style={{ marginTop: '100px', color: '#fff', fontSize: '5em', mixBlendMode: 'exclusion' }}
                >
                    Welcome! SuperNova Team
                </AnimatedText>
                <AnimatedText
                    type="words"
                    animation={{
                        x: '200px',
                        y: '-20px',
                        scale: 1.1,
                        ease: 'ease-in-out',
                    }}
                    animationType="float"
                    interval={0.06}
                    duration={1.8}
                    tag="p"
                    className="animated-paragraph"
                    includeWhiteSpaces
                    threshold={0.1}
                    style={{ color: '#fff', fontSize: '3em', mixBlendMode: 'exclusion', marginTop: '-70px' }}
                >
                    Please Choose Your Team
                </AnimatedText>
                <Link to="/rocket">
                    <Button className='line' size='large' type="dashed" ghost>
                        Rocket Team
                    </Button>
                </Link>
            </Container>
        </div>
    )
}

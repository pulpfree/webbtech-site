import React, { FunctionComponent, useState } from 'react'
import Head from 'next/head'

import { useSpring, animated } from 'react-spring'

const Solutions: FunctionComponent = () => {
  const [state, toggle] = useState(true)
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  })

  return (
    <>
      <Head>
        <title>Webbtech - Solutions</title>
        <meta name='description' content='Solutions' />
      </Head>
      <main>
        <div onClick={() => toggle(!state)}>
          <animated.div
            style={{
              opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
              transform: x
                .interpolate({
                  range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                  output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
                })
                .interpolate((x) => `scale(${x})`),
            }}
          >
            click
          </animated.div>
        </div>
      </main>
    </>
  )
}

export default Solutions
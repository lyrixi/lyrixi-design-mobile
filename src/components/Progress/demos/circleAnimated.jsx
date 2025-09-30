import React, { useState, useEffect } from 'react'
import { Page, Progress, Divider, Card } from 'lyrixi-design-mobile'

const AnimatedDemo = () => {
  const [percent, setPercent] = useState(0)

  const handlePercentChange = (newPercent) => {
    setPercent(newPercent)
  }

  return (
    <Page>
      <Page.Main>
        <Divider>Duration</Divider>
        <Card>
          <Progress.Circle
            percent={percent}
            style={{ '--seed-progress-animation-duration': '0.1s' }}
          >
            <span>{percent}%</span>
          </Progress.Circle>
          <Progress.Circle percent={percent} style={{ '--seed-progress-animation-duration': '1s' }}>
            <span>{percent}%</span>
          </Progress.Circle>
          <Progress.Circle percent={percent} style={{ '--seed-progress-animation-duration': '2s' }}>
            <span>{percent}%</span>
          </Progress.Circle>
        </Card>

        <Divider>Timing</Divider>
        <Card>
          <Progress.Circle
            percent={percent}
            style={{
              '--seed-progress-animation-duration': '1s',
              '--seed-progress-animation-timing': 'linear'
            }}
          >
            <span>{percent}%</span>
          </Progress.Circle>
          <Progress.Circle
            percent={percent}
            style={{
              '--seed-progress-animation-duration': '1s',
              '--seed-progress-animation-timing': 'ease-out'
            }}
          >
            <span>{percent}%</span>
          </Progress.Circle>

          <Progress.Circle
            percent={percent}
            style={{
              '--seed-progress-animation-duration': '1s',
              '--seed-progress-animation-timing': 'ease-in-out'
            }}
          >
            <span>{percent}%</span>
          </Progress.Circle>
        </Card>

        <div>
          Percent:
          <input
            type="range"
            min="0"
            max="100"
            value={percent}
            onChange={(e) => handlePercentChange(Number(e.target.value))}
            style={{ marginLeft: '10px' }}
          />
          {percent}%
        </div>
      </Page.Main>
    </Page>
  )
}

export default AnimatedDemo

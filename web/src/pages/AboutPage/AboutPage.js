import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'
import { Grid, Col, Card, Text, Metric } from "@tremor/react";


const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <Grid numCols={1} numColsSm={2} numColsLg={3} className="gap-2">
        <Col numColSpan={1} numColSpanLg={2}>
          <Card>
            <Text>Title</Text>
            <Metric>KPI 1</Metric>
          </Card>
        </Col>
      </Grid>
    </>
  )
}

export default AboutPage

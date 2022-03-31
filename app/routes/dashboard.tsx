import Card from "~/components/Card";
import Button from "~/components/Button";

export default function Dashboard() {
  return (
    <div className='container margin-top-md'>
      <div>
        <Button>Primary</Button>
        <Button color='secondary' className='margin-left-sm'>Secondary</Button>
        <Button color='tertiary' className='margin-left-sm'>Tertiary</Button>
      </div>
      <div className='margin-top-md'>
        <Button outline >Outline</Button>
        <Button color='secondary' outline className='margin-left-sm'>Outline</Button>
        <Button color='tertiary' outline className='margin-left-sm'>Outline</Button>
      </div>
      <div className='margin-top-md'>
        <Button pill>Pill</Button>
        <Button color='secondary' pill className='margin-left-sm'>Pill</Button>
        <Button color='tertiary' pill className='margin-left-sm'>Pill</Button>
      </div>
      <div className='margin-top-md'>
        <Button size='small'>Small</Button>
        <Button color='secondary' className='margin-left-sm'>Default</Button>
        <Button color='tertiary' size='large' className='margin-left-sm'>Large</Button>
      </div>
      <div className='margin-top-md'>
        <Button active>Active</Button>
      </div>
      <div className='margin-top-md'>
        <Button minMobileHeight='100px'>Height</Button>
      </div>
      <Card className='margin-top-md'>
        <p>Just a card</p>
      </Card>
      <Card className='margin-top-md' padded>
        <p>Padded card</p>
      </Card>
      <Card className='margin-top-md' padded cardPadding="var(--rms-space-large)">
        <p>Extra Padded card</p>
      </Card>
      <Card
        className='margin-top-md'
        header={<h1>Header</h1>}
        body={<p>Body</p>}
        footer={<div>Footer</div>}
      />
      <Card
        className='margin-top-md'
        header={<h1>Header</h1>}
        body={<p>Body</p>}
        footer={<div>Footer</div>}
        headerProps={{
          className: 'background-primary-lighter',
          role: 'example',
        }}
        bodyProps={{
          className: 'background-primary-lightest'
        }}
        footerProps={{
          className: 'background-primary-lighter'
        }}
      />
    </div>
  );
}

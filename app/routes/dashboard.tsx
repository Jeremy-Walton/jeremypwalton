import Card from "~/components/Card";
import Button from "~/components/Button";
import FlashMessage from "~/components/FlashMessage";
import LabeledInput from "~/components/forms/LabeledInput";
import ErrorSummary from "~/components/forms/ErrorSummary";
import Dropdown from "~/components/forms/Dropdown";
import Checkbox from "~/components/forms/Checkbox";
import FormGroup from "~/components/forms/FormGroup";
import Radio from "~/components/forms/Radio";

export default function Dashboard() {
  return (
    <div className='container margin-y-md'>
      <FlashMessage type='notice' message='You did a thing' />

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

      <Card
        className="margin-top-md"
        header={<h1>Forms</h1>}
        body={
          <>
            <ErrorSummary
              title='2 errors prohibited this from being saved'
              errors={[
                'Tags rank is not a number',
                "Title can't be blank"
              ]}
            />
            <form>
              <LabeledInput
                id='text-input'
                label="Text Input"
                error="Can't be blank"
                inputProps={{
                  type: 'text',
                  placeholder: 'Text Input',
                }}
              />
              <LabeledInput
                id='password-input'
                label="Password Input"
                hint="Here's a password hint"
                inputProps={{
                  type: 'password',
                  placeholder: 'Password Input',
                }}
              />
              <LabeledInput
                id='number-input'
                label="Number Input"
                inputProps={{
                  type: 'number',
                  placeholder: 'Number Input',
                }}
              />
              <LabeledInput
                id='email-input'
                label="Email Input"
                inputProps={{
                  type: 'email',
                  placeholder: 'Email Input',
                }}
              />
              <LabeledInput
                id='phone-input'
                label="Phone Input"
                inputProps={{
                  type: 'phone',
                  placeholder: 'Phone Input',
                }}
              />
              <Dropdown
                id='select-dropdown'
                label="Select Dropdown"
                error="Can't be blank"
                options={[
                  { value: 'one', label: 'Option 1' },
                  { value: 'two', label: 'Option 2' },
                  { value: 'three', label: 'Option 3' },
                ]}
              />

              <Checkbox id='checkbox' label="Checkbox" />
              <Checkbox
                id='disabled-checkbox'
                label="Disabled Checkbox"
                disabled
              />
              <Checkbox
                id='disabled-checked-checkbox'
                label="Disabled checkbox (checked)"
                disabled
                checked
              />

              <FormGroup>
                <Radio id='form-radio-1' name="radio" value="1" label='Radio 1' />
                <Radio id='form-radio-2' name="radio" value="2" label='Radio 2' />
              </FormGroup>

              <FormGroup>
                <Radio id='form-radio-disabled' name="disabled-radio" value="1" label='Radio Disabled' disabled />
                <Radio id='form-radio-disabled-checked' name="disabled-radio" value="1" label='Radio Disabled checked' checked disabled />
              </FormGroup>
            </form>
          </>
        }
      />
    </div>
  );
}

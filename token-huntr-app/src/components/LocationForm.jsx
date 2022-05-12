import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router-dom';
import { Form, Field } from 'react-final-form'

const onSubmit = async values => {
    let { userId } = useParams()
    await axios.post(`http://localhost:3001/api/location/create_cache/${userId}`)
}

const required = value => (value ? undefined : 'Required');

const CacheForm = () => (
    < div >
        <Form
            onSubmit={onSubmit}
            render={({ handleSubmit, reset, submitting, pristine, values }) => (
                <form onSubmit={handleSubmit}>
                    <Field
                        name='latitude'
                        validate={required}
                    >
                        {({ input, meta }) => (
                            <div>
                                <label>Latitude</label>
                                <input {...input} type='text' placeholder='Latitude' />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <Field
                        name='longitude'
                        validate={required}
                    >
                        {({ input, meta }) => (
                            <div>
                                <label>Longitude</label>
                                <input {...input} type='text' placeholder='Longitude' />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <Field
                        name="level"
                        validate={required}
                    >
                        {({ input, meta }) => (
                            <div>
                                <label>level</label>
                                <input {...input} type="text" placeholder='Easy, Moderate, Hard' />
                                {meta.error && meta.touched && <span>{meta.error}</span>}
                            </div>
                        )}
                    </Field>
                    <div className="buttons">
                        <button type="submit" disabled={submitting}>
                            Submit
                        </button>
                        <button
                            type="button"
                            onClick={reset}
                            disabled={submitting || pristine}
                        >
                            Reset
                        </button>
                    </div>
                    <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
            )}
        />
    </div >
)

export default CacheForm
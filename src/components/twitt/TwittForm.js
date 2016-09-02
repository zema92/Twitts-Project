import React from 'react';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';

const TwittForm = ({twitt, allAuthors, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h1>Manage Twitt</h1>

      <SelectInput
        name="authorId"
        label="Author"
        value={twitt.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onChange} error={errors.authorId}/>

      <TextInput
        name="text"
        label="Text"
        value={twitt.text}
        onChange={onChange}
        error={errors.text}/>

      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}/>
    </form>
  );
};

TwittForm.propTypes = {
  twitt: React.PropTypes.object.isRequired,
  allAuthors: React.PropTypes.array,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
};

export default TwittForm;

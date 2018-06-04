import React from 'react'
import PropTypes from 'prop-types'
import { FormGroup, Label, Input } from 'reactstrap'

const Select = ({
  label,
  id,
  columns,
  name,
  value,
  handleChange,
  children,
}) => {
  const cols = (columns) ? `col-sm-${columns}` : 'col-sm-12'
  return (
    <div className={cols}>
      <FormGroup>
        <Label for={id}> {label} </Label>
        <Input type="select" value={value} name={name} id={id} onChange={handleChange}>
          {children}
        </Input>
      </FormGroup>
    </div>
  )
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  columns: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.oneOf([
    'BTC', 'ETH', '1DAY', '3DAY', '7DAY', '1MTH',
  ]),
  handleChange: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

export default Select

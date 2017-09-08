import React from 'react'
import types from 'prop-types'
import cx from 'classnames'

import images from './images'
import './styles.css'

const {keys} = Object

const MonsterAvatar = ({
  name,
  flip,
  dead,
  inList
}) => 
  <div className={cx('MonsterAvatar', {
    'MonsterAvatar--inList': inList,
    'MonsterAvatar--flip': flip
  })}>
    <img className={cx('MonsterAvatar__monster', {
      'MonsterAvatar__monster--dead': dead
    })} src={images[name]} />
    {!inList && <img className={cx('MonsterAvatar__tombstone', {
      'MonsterAvatar__tombstone--up': dead
    })} src={images.tombstone} />}
  </div>

MonsterAvatar.propTypes = {
  name: types.oneOf(keys(images))
}

export default MonsterAvatar

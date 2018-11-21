import React from 'react'
import {Grid} from '@material-ui/core'
import LeftPanel from './LeftPanel'
import RightPanel from './RightPanel'

const styles={
  Paper:{
    padding: 20,
    marginTop: 20,
    marginBottom: 20
  },
  Grid:{
  	margin:0
  }
}
export default props =>
<Grid container spacing={16} xs={12} style={styles.Grid}>
	<Grid item xs={6}>
		<LeftPanel styles={styles} />
	</Grid>
	<Grid item xs={6}>
		<RightPanel styles={styles} />
	</Grid>
</Grid>
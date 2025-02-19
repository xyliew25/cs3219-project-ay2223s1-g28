import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

import OutlinedContainer from '../../components/ui/OutlinedContainer';
import SignupForm from '../../components/forms/SignupForm';

function SignupPage() {
  return (
    <OutlinedContainer
      customStyle={{ width: '75vw', maxWidth: '500px !important' }}
    >
      <Grid
        container
        direction="column"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <AssignmentIndIcon color="primary" sx={{ fontSize: 80 }} />
        <Grid item>
          <Typography>You must be new here!</Typography>
        </Grid>
        <Grid item>
          <SignupForm />
        </Grid>
      </Grid>
    </OutlinedContainer>
  );
}

export default SignupPage;

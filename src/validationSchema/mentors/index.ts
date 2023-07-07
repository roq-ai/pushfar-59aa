import * as yup from 'yup';

export const mentorValidationSchema = yup.object().shape({
  profile: yup.string().required(),
  user_id: yup.string().nullable(),
});

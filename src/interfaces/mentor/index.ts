import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MentorInterface {
  id?: string;
  profile: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface MentorGetQueryInterface extends GetQueryInterface {
  id?: string;
  profile?: string;
  user_id?: string;
}

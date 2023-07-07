import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MenteeInterface {
  id?: string;
  profile: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface MenteeGetQueryInterface extends GetQueryInterface {
  id?: string;
  profile?: string;
  user_id?: string;
}

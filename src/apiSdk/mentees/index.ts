import axios from 'axios';
import queryString from 'query-string';
import { MenteeInterface, MenteeGetQueryInterface } from 'interfaces/mentee';
import { GetQueryInterface } from '../../interfaces';

export const getMentees = async (query?: MenteeGetQueryInterface) => {
  const response = await axios.get(`/api/mentees${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createMentee = async (mentee: MenteeInterface) => {
  const response = await axios.post('/api/mentees', mentee);
  return response.data;
};

export const updateMenteeById = async (id: string, mentee: MenteeInterface) => {
  const response = await axios.put(`/api/mentees/${id}`, mentee);
  return response.data;
};

export const getMenteeById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/mentees/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteMenteeById = async (id: string) => {
  const response = await axios.delete(`/api/mentees/${id}`);
  return response.data;
};

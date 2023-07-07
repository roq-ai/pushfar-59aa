const mapping: Record<string, string> = {
  clients: 'client',
  mentees: 'mentee',
  mentors: 'mentor',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}

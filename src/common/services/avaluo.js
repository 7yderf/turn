/* eslint-disable import/prefer-default-export */
import config from "@config";

export const infoAvaluo = async () => {
  const request = await fetch(`${config.api}/api/leads/avaluos/1`);
  const { data, error } = await request.json();
  if (error) throw new Error(error);
  return data;
};

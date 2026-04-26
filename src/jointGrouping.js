export const JOINT_GROUPS = [
  { key: 'center', labelKey: 'jointGroupCenter', fallbackLabel: '中' },
  { key: 'left', labelKey: 'jointGroupLeft', fallbackLabel: '左' },
  { key: 'right', labelKey: 'jointGroupRight', fallbackLabel: '右' }
];

export function getJointGroupKey(jointName = '') {
  const normalized = String(jointName).toLowerCase();
  if (/(^|[_-])left([_-]|$)/.test(normalized) || /(^|[_-])l([_-]|$)/.test(normalized)) {
    return 'left';
  }
  if (/(^|[_-])right([_-]|$)/.test(normalized) || /(^|[_-])r([_-]|$)/.test(normalized)) {
    return 'right';
  }
  return 'center';
}

export function groupJointsBySide(joints) {
  const grouped = Object.fromEntries(JOINT_GROUPS.map((group) => [group.key, []]));
  joints.forEach((joint, index) => {
    grouped[getJointGroupKey(joint.name)].push({ joint, index });
  });
  return grouped;
}

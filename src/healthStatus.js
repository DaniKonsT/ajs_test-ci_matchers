export default function healthStatus({ health }) {
  if (health > 50) {
    return "healthy"; // Зелёный
  } else if (health >= 15) {
    return "wounded"; // Жёлтый
  } else {
    return "critical"; // Красный
  }
}

#include <stdlib.h>

int main(int argc, char *argv[])
{
  static int canary = 0;
  char temp[2048];

  strcpy(temp, argv[1]);
  printf(temp);
  printf("\n");
  printf("Canary at 0x%08x = 0x%08x\n", &canary, canary);
}

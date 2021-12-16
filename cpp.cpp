#include <iostream>
#include <cstdlib>
#include <ctime>

using std::cin, std::cout, std::endl;
const int trials = 4000;
const int PEOPLE = 20;
int matches = 0;
// g++ -pedantic  -Wall -Wextra  -std=c++17 Probability.cpp -o Probability
  void birthdays(){
    std::string peoplebday[PEOPLE];
  for(int i = 0; i < PEOPLE; i ++){
    int day;
    int month = 1 + (rand() % 12);
    if(month == 1  month == 3  month == 5  month == 7   month == 8  month == 10  month == 12){
      day = 1 + (rand() % 31);
    } else if (month == 2){
      day = 1 + (rand() % 29);
    } else {
      day = 1 + (rand() % 30);
    }
    peoplebday[i] = std::to_string(month) + "/" + std::to_string(day);
      for(int j = 0; j < i - 1; j++){
        if(peoplebday[i] == peoplebday[j]){
          // if birthdays match, execute code below
          matches++;
          }
      }
    }
  }

int main(){
  unsigned int seed;
  seed = time(0);
  srand(seed);
  for(int x = 0; x < trials; x++){
    //cout << "trial # is " << x + 1 << endl;
       birthdays();
    }
    cout << "total matches is " << matches << endl;
    double percent = (double) matches / (double) trials * 100;
    cout << "Probability is " << percent  << "%" << endl;
  }